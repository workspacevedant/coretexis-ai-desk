from fastapi import FastAPI
from api.router import api_router
app=FastAPI(title='Coretexis AI Desk API',version='0.1.0')
app.include_router(api_router)
@app.get('/')
def root(): return {'app':'Coretexis AI Desk','status':'running'}
