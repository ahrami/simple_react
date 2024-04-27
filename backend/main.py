from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI()

class Counter():
    count: int = 0
    
counter = Counter()

@app.get("/")
async def root():
    return {"count": counter.count}

class CounterBody(BaseModel):
    value: int = Field(0, ge=0)

@app.post("/add")
async def add(body: CounterBody):
    counter.count += body.value
    return {"count": counter.count}

@app.post("/subtract")
async def subtract(body: CounterBody):
    counter.count -= body.value
    return {"count": counter.count}