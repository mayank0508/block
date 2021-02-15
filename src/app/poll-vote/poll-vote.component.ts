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
        horizontal: true,
        
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }
}
