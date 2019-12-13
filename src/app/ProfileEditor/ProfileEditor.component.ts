import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-ProfileEditor',
  templateUrl: './ProfileEditor.component.html',
  styleUrls: ['./ProfileEditor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  // 手动创建
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //   })
  // });

  // 表单构建器FormBuilder服务有三个方法:control(),group(),array(),用于在组件类中分别生成FormControl,FormGroup,FromArray
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: ['']
    }),
    // 表单数组是FormGroup之外的另一个选择,用于管理任意数量的匿名控件.
    // 使用FormBuilder.array()方法定义该数组,并用FormBuilder.control()方法往数组中添加一个初始控件
    aliases: this.fb.array([
      this.fb.control(''),
      this.fb.control(''),
      this.fb.control(''),
    ])
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.profileForm);
  }
  updateProfile() {
      // 部分更新 patchValue()方法针对模型的结构进行更新
      this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
          city: 'beijing'
        }
      });
    }
    // 访问FormArray 控件,相比于重复使用this.profileForm.get()方法获取每个实例的方式,通过getter来访问控件更方便
    // 使用getter语法创建类属性aliases,返回父表单中表示aliases的表单数组控件
    get aliases() {
      // console.log(this.profileForm.get('aliases'));
      return this.profileForm.get('aliases') as FormArray;
    }
    get address() {
      // console.log(this.profileForm.get('address'));
      return this.profileForm.get('address') as FormGroup;
    }
    addAlias() {
      this.aliases.push(this.fb.control(''));
    }
  }
