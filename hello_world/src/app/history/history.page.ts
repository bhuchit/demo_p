import { Component, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  id: any
  onOptions: []
  status: String = 'รอดำเนินการ'
  sub: Subscription;
  color: string = "danger";
  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(param => {
      this.id = param['id'];
      console.log(this.id);
      this.homeService.getOnOptionByOrderId(this.id).subscribe(data => {
        this.onOptions = data
        console.table(this.onOptions);
          // this.rout.navigate(['/history',{data}]); //อาจจะมีการแก้ path
        })
    });
  }

  changeStatus(id:any){
    if(this.color === 'danger'){
      this.color =  'success';
      this.status = 'เสร็จสิ้น';
    }
    else
      this.color = 'danger';
    console.log(id);
  }

}
