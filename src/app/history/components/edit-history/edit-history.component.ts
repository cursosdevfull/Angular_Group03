import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-edit-history',
  templateUrl: './edit-history.component.html',
  styleUrls: ['./edit-history.component.css'],
})
export class EditHistoryComponent implements OnInit {
  id;
  history;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly historyService: HistoryService
  ) {}

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.activatedRoute.paramMap.subscribe((response: any) => {
      this.id = response.params.id;
    });
    const title = this.activatedRoute.snapshot.queryParamMap.get('title');
    const fragmento = this.activatedRoute.snapshot.fragment;

    this.history = this.activatedRoute.snapshot.data.history;

    // console.log(id);
    /*     console.log(title);
    console.log(fragmento); */
    // this.getHistory();
  }

  getHistory() {
    this.historyService.getOne(this.id);
  }

  change() {
    this.router.navigate(['histories', 'edit', '5fa1f333520b2a6b78c01d94'], {
      queryParamsHandling: 'preserve',
      preserveFragment: true,
    });
  }
}
