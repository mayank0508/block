import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  options = ['Monday', 'Tuesday', 'Wedneaday'];
  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
     this.voteForm = this.fb.group({
       selected: this.fb.control("", [Validators.required]),
     });
   }


  ngOnInit(): void {}

  submitForm(){
    console.log(this.voteForm.value);
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [{
      data: [0,0,0],
    }],
      chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday'],
    },
    };
}
}
