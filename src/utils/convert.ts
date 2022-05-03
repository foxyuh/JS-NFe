export { Convert }

class Convert {

    static realToDolar(num){
        num = num.replace('.', '');
        num = num.replace(',', '.');
        return Number(num)
    }

}