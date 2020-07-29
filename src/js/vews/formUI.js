import {getAcInstance,getDpInstance} from  '../plugins/materialize';

class FormUI {

    constructor(acInstance,dpInstance) {
        this.$form=document.forms['locationControls'];
        this.origin = document.getElementById('autocomplete-from');
        this.originAutocomplete = acInstance(this.origin);
        this.destination = document.getElementById('autocomplete-to');
        this.destinationAutocomplete = acInstance(this.destination);         this.depart=dpInstance(document.getElementById('datepicker-depart'));
        this.return=dpInstance(document.getElementById('datepicker-return'));
    }

    get form() {
        return this.$form;
    }
    get originValue(){
        return this.origin.value;
    }
    get destinationValue(){
        return this.destination.value;
    }
    get departDateValue(){
        return this.depart.toString();
    }
    get returnDateValue(){
        return this.return.toString();
    }
    setACData(data){
        this.originAutocomplete.updateData(data)
        this.destinationAutocomplete.updateData(data)
    }
}

const formUI=new FormUI(getAcInstance,getDpInstance);

export default formUI;
