from fastapi import APIRouter
router=APIRouter(prefix='/version',tags=['system'])
@router.get('')
def version(): return {'version':'0.1.0','codename':'Snapdragon Edition'}
