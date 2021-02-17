import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ApexCharts from 'apexcharts';
import { INSPECT_MAX_BYTES } from 'buffer';

@Component({
  selector: 'app-poll-vote',
  templateUrl: './poll-vote.component.html',
  styleUrls: ['./poll-vote.component.scss']
})
export class PollVoteComponent implements OnInit {

  @Input() voted: boolean;
  @Input() options: string[];
  @Input() results: number[];
  @Input() question: string;

  voteForm: FormGroup;

  constructor(private fb: FormBuilder) {
     this.voteForm = this.fb.group({
       selected: this.fb.control("", [Validators.required]),
     });
   }


  ngOnInit(): void {
    if(this.voted){
      this.generateChart();
    }
  }

  submitForm(){
    console.log(this.voteForm.value);
  }

  generateChart() {
    const options: ApexCharts.ApexOptions = {
      series: [{
      data: this.results,
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
      categories: this.options,
    },
    };
   const chart = new ApexCharts(document.getElementById('poll-results'), options);
   chart.render()
 }
}
