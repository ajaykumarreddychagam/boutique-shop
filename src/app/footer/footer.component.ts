import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-footer',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  newsletterForm: FormGroup;
  subscriptionMessage: string = "";
  isSuccess: boolean = false;
  currentYear: number = new Date().getFullYear();

  constructor(private fb: FormBuilder) {
    this.newsletterForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.newsletterForm.valid) {
      // Simulate API call
      setTimeout(() => {
        this.isSuccess = true;
        this.subscriptionMessage = "Successfully subscribed to newsletter!";
        this.newsletterForm.reset();
      }, 1000);
    } else {
      this.isSuccess = false;
      this.subscriptionMessage = "Please enter a valid email address.";
    }
  }
}
