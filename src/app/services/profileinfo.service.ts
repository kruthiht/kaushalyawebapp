export class ProfileinfoService{
    id:string;
    
    
    public info(id:string ){
        this.id=id;
        console.log('info method'+this.id);
    }
}