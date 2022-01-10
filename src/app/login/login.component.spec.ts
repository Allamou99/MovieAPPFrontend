import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post', 'get']);
  let authservice : AuthService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[FormsModule, ReactiveFormsModule],
      providers: [{ provide: HttpClient, useValue: httpClientSpy }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpClientSpy.post.and.returnValue({ status: 200, data: {} });
    httpClientSpy.get.and.returnValue({ status: 200, data: {} });
    authservice = new AuthService(httpClientSpy);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check required field',()=>{
    const addvmFormElement : HTMLInputElement = fixture.debugElement.nativeElement
    .querySelector('#loginform').querySelectorAll('input')[0];
  })

  it('check email adress format',()=>{
    const addvmFormElement : HTMLInputElement = fixture.debugElement.nativeElement
    .querySelector('#loginform').querySelectorAll('input')[0];
    addvmFormElement.value = 'ayoubchoukri@gmail.com';
    addvmFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
      const username = component.LoginForm.get('username');
      expect(addvmFormElement.value).toEqual(username?.value);
      expect(username?.errors).toBeTruthy();
      expect(username?.errors?.email).toBeTruthy();
    })
  })  
});
