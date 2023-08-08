import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { MatTableDataSource } from '@angular/material/table';
import { IfinworthService } from 'src/services/ifinworth.service';
import { bigmacindexdata, bigMacIndexpropertyNames } from 'src/services/ifinworth.utils';

@Component({
  selector: 'app-big-mac-index',
  templateUrl: './big-mac-index.component.html',
  styleUrls: ['./big-mac-index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BigMacIndexComponent implements OnInit {
  @ViewChild(MatDatepickerInput) datepickerInput!: MatDatepickerInput<Date>;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // property starts 
  showFiller = false;
  isFilteredBigMacIndex = false;

  constructor(
    private ifinworthService: IfinworthService) { }

  public dataSource : MatTableDataSource<bigmacindexdata> = new MatTableDataSource<bigmacindexdata>([]);
  displayedColumns: string[] = bigMacIndexpropertyNames;

  ngOnInit(): void {
    this.ifinworthService.getBigMacIndex().subscribe((res)=>{
      const convertedData: bigmacindexdata[]= res.data.map((item:any) => ({
        date: item[0],
        local_price:item[1]?.toFixed(2),
        dollar_ex:item[2]?.toFixed(2),
        dollar_price:item[3]?.toFixed(2),
        dollar_ppp:item[4]?.toFixed(2),
        dollar_valuation:item[5]?.toFixed(2),
        dollar_adj_valuation:item[6]?.toFixed(2),
        euro_adj_valuation:item[7]?.toFixed(2),
        sterling_adj_valuation:item[8]?.toFixed(2),
        yen_adj_valuation:item[9]?.toFixed(2),
        yuan_adj_valuation:item[10]?.toFixed(2)
      }));

       this.dataSource = new MatTableDataSource<bigmacindexdata>(convertedData);
    })

    //if data is not present use JSON code
      // const convertedData: bigmacindexdata[]= jsonBigMacIndex.map((item:any) => ({
      //   date: item['date'],
      //   local_price:(item['local_price']).toFixed(2),
      //   dollar_ex:(item['dollar_ex']).toFixed(2),
      //   dollar_price:(item['dollar_price']).toFixed(2),
      //   dollar_ppp:(item['dollar_ppp']).toFixed(2),
      //   dollar_valuation:(item['dollar_valuation']).toFixed(2),
      //   dollar_adj_valuation:item['dollar_adj_valuation']?.toFixed(2),
      //   euro_adj_valuation:item['euro_adj_valuation']?.toFixed(2),
      //   sterling_adj_valuation:item['sterling_adj_valuation']?.toFixed(2),
      //   yen_adj_valuation:item['yen_adj_valuation']?.toFixed(2),
      //   yuan_adj_valuation:item['yuan_adj_valuation']?.toFixed(2)
      // }));
      // this.dataSource = new MatTableDataSource<bigmacindexdata>(convertedData);
    //end
  }

  isDateSelected(): boolean {
    return !!this.datepickerInput?.value;
  }

  applyFilter() {
    this.isFilteredBigMacIndex = true;

    if (this.datepickerInput && this.datepickerInput.value) {
      const year = this.datepickerInput.value.getFullYear();
      const month = String(this.datepickerInput.value.getMonth() + 1).padStart(2, '0');
      const day = String(this.datepickerInput.value.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      this.ifinworthService.filterGetBigMacIndex(formattedDate).subscribe((respnse)=>{
        this.isFilteredBigMacIndex = false;
        if(respnse.data){
          const convertedData :bigmacindexdata[]= respnse.data.map((item:any)=>({
            date: item[0],
            local_price:(item[1]).toFixed(2),
            dollar_ex:(item[2]).toFixed(2),
            dollar_price:(item[3]).toFixed(2),
            dollar_ppp:(item[4]).toFixed(2),
            dollar_valuation:(item[4]).toFixed(2),
            dollar_adj_valuation:item[5]?.toFixed(2),
            euro_adj_valuation:item[6]?.toFixed(2),
            sterling_adj_valuation:item[6]?.toFixed(2),
            yen_adj_valuation:item[7]?.toFixed(2),
            yuan_adj_valuation:item[8]?.toFixed(2)
          }))

          this.dataSource = new MatTableDataSource<bigmacindexdata>(convertedData);
          this.datepickerInput.value = null;
        }
      }) 
    }
    else {
      window.alert("please select date")
    }
  }

  clearDate(){
    this.datepickerInput.value = null;
  }
}