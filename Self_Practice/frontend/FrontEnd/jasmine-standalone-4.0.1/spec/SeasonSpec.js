describe('spyOn() Demp',function(){
    it('Should be summer',function(){
        var s=new Season();
        s.getNextSeason();
        expect(s.season).toEqual('summer');
    })
})