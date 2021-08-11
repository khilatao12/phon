class people{
    constructor(ten,tuoi,noi_o){
        this.ten=ten
        this.tuoi=tuoi
        this.noi_o=noi_o
    }

}
class student extends people{
    constructor(ten,tuoi,noi_o,lop,truong){
        super(ten,tuoi,noi_o)
        this.lop = lop
        this.truong = truong
    }
}