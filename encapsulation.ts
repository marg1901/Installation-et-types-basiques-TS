import  assert  from  'assert';

class BankCustomer { 
    private name: string;
    private codePin: string;

    constructor(customerName: string, codePin: string) { 
        this.name = customerName;
        this.codePin = codePin;
    } 
    public getName(): string { 
        return this.name
    }

    public verifyPinInput(pinInput: string): boolean {
        return pinInput === this.codePin ? true : false;
    }


}


const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));
