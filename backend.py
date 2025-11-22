# FastAPI backend for discussion threads
# Run with: uvicorn main:app --reload
# Install dependencies: pip install fastapi uvicorn

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional, List, Dict
from datetime import datetime

app = FastAPI(title="Discussion Threads API")

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory storage
discussions: Dict[str, List[dict]] = {}
comment_id_counter = 1


# Pydantic models
class CommentCreate(BaseModel):
    author: str
    text: str
    parent_id: Optional[int] = None


class CommentUpdate(BaseModel):
    text: str


class Comment(BaseModel):
    id: int
    author: str
    text: str
    parent_id: Optional[int]
    timestamp: str
    replies: List['Comment'] = []
    edited: bool = False
    edited_at: Optional[str] = None


# Helper functions
def find_comment_by_id(comments: List[dict], comment_id: int) -> Optional[dict]:
    """Recursively find a comment by ID"""
    for comment in comments:
        if comment['id'] == comment_id:
            return comment
        if comment['replies']:
            found = find_comment_by_id(comment['replies'], comment_id)
            if found:
                return found
    return None


def remove_comment_by_id(comments: List[dict], comment_id: int) -> bool:
    """Recursively remove a comment by ID"""
    for i, comment in enumerate(comments):
        if comment['id'] == comment_id:
            comments.pop(i)
            return True
        if comment['replies']:
            if remove_comment_by_id(comment['replies'], comment_id):
                return True
    return False


def count_comments(comments: List[dict]) -> int:
    """Count total comments including replies"""
    count = 0
    for comment in comments:
        count += 1
        if comment['replies']:
            count += count_comments(comment['replies'])
    return count


# API Endpoints
@app.get("/")
async def root():
    return {"message": "Discussion Threads API", "status": "running"}


@app.get("/api/health")
async def health_check():
    return {"status": "ok", "timestamp": datetime.now().isoformat()}


@app.get("/api/articles/{article_id}/comments")
async def get_comments(article_id: str):
    """Get all comments for an article"""
    comments = discussions.get(article_id, [])
    return {"article_id": article_id, "comments": comments}


@app.post("/api/articles/{article_id}/comments", status_code=201)
async def create_comment(article_id: str, comment: CommentCreate):
    """Create a new comment or reply"""
    global comment_id_counter
    
    if article_id not in discussions:
        discussions[article_id] = []
    
    new_comment = {
        "id": comment_id_counter,
        "author": comment.author,
        "text": comment.text,
        "parent_id": comment.parent_id,
        "timestamp": datetime.now().isoformat(),
        "replies": [],
        "edited": False,
        "edited_at": None
    }
    
    comment_id_counter += 1
    
    if comment.parent_id:
        # Add as a reply to parent comment
        parent = find_comment_by_id(discussions[article_id], comment.parent_id)
        if not parent:
            raise HTTPException(status_code=404, detail="Parent comment not found")
        parent['replies'].append(new_comment)
    else:
        # Add as top-level comment
        discussions[article_id].append(new_comment)
    
    return new_comment


@app.put("/api/articles/{article_id}/comments/{comment_id}")
async def update_comment(article_id: str, comment_id: int, update: CommentUpdate):
    """Update a comment's text"""
    if article_id not in discussions:
        raise HTTPException(status_code=404, detail="Article not found")
    
    comment = find_comment_by_id(discussions[article_id], comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")
    
    comment['text'] = update.text
    comment['edited'] = True
    comment['edited_at'] = datetime.now().isoformat()
    
    return comment


@app.delete("/api/articles/{article_id}/comments/{comment_id}")
async def delete_comment(article_id: str, comment_id: int):
    """Delete a comment"""
    if article_id not in discussions:
        raise HTTPException(status_code=404, detail="Article not found")
    
    removed = remove_comment_by_id(discussions[article_id], comment_id)
    if not removed:
        raise HTTPException(status_code=404, detail="Comment not found")
    
    return {"message": "Comment deleted", "comment_id": comment_id}


@app.get("/api/articles")
async def get_all_articles():
    """Get all articles with comment counts"""
    articles = [
        {
            "article_id": article_id,
            "comment_count": count_comments(comments)
        }
        for article_id, comments in discussions.items()
    ]
    return {"articles": articles}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
