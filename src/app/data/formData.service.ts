import {Injectable} from '@angular/core';

import {FormData, Personal, Address } from './formData.model';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isPersonalFormValid: boolean = false;
  private isWorkFormValid: boolean = false;
  private isAddressFormValid: boolean = false;

  getPersonal(): Personal {
    // return the Personal data
    var personal: Personal = {
      firstName: this.formData.firstName,
      lastName: this.formData.lastName,
      email: this.formData.email
    };
    return personal;
  }

  setPersonal(data: Personal) {
    // updatethe personal data only when the personal form had been validated successfully
    this.isPersonalFormValid = true;
    this.formData.firstName = data.firstName;
    this.formData.lastName = data.lastName;
    this.formData.email = data.email;
  }

  getWork(): string {
    // Return the work type
    return this.formData.work;
  }

  setWork(data: string) {
    // Update the work type only Work Form had been validated successfully
    this.isWorkFormValid = true;
    this.formData.work = data;
  }

  getAddress(): Address {
    // Return the address data
    var address: Address = {
      street: this.formData.street,
      city: this.formData.city,
      state: this.formData.state,
      zip: this.formData.zip
    };
    return address;
  }

  setAddress(data: Address) {
    // update the Address data only  when the address form had been validated successfullu
    this.isAddressFormValid = true;
    this.formData.street = data.street;
    this.formData.city = data.city;
    this.formData.state = data.state;
    this.formData.zip = data.zip;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Return the form data all this* members had been this.resetFormData()
    this.formData.clear();
    this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isPersonalFormValid &&
           this.isWorkFormValid &&
           this.isAddressFormValid;
  }
}

