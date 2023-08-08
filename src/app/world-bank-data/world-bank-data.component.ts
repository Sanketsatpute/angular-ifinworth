import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatTableDataSource } from '@angular/material/table';
import { IfinworthService } from 'src/services/ifinworth.service';
import { worldIndexData, worldIndexPropertyNamesc } from 'src/services/ifinworth.utils';

@Component({
  selector: 'app-world-bank-data',
  templateUrl: './world-bank-data.component.html',
  styleUrls: ['./world-bank-data.component.css']
})
export class WorldBankDataComponent implements OnInit {
  @ViewChildren(MatCheckbox) checkboxRefs!: QueryList<MatCheckbox>;
  @ViewChild('matSelect') matSelect: any;
  
  // property starts 
  isFilteredWorldIndex = false;
  options:Array<object>=[]
  uniqueSeriesId:Array<string>= []; 
  uniqueCountry:Array<object>= []; 
  countryCheckbox: Array<object>=[];
  countryCheckboxValue:any=[];
  selectedSeriesValue: string='';
  
  constructor(
    private ifinworthService: IfinworthService) { }

  public dataSource : MatTableDataSource<worldIndexData> = new MatTableDataSource<worldIndexData>([]);
  displayedColumns: string[] = worldIndexPropertyNamesc;

  ngOnInit(): void {
  this.getDataForWorldIndex();
  }

  getDataForWorldIndex(){
    this.ifinworthService.getWorldIndexData().subscribe((res)=>{
      const convertedData: worldIndexData[]= res.data.map((item:any) => ({
        series_id: item[0],
        country_code:item[1],
        country_name:item[2],
        year:item[3],
        value:item[4]
      }));

       this.dataSource = new MatTableDataSource<worldIndexData>(convertedData);

       convertedData.map((worldIndexData) =>{
        if(worldIndexData.series_id){
          this.uniqueSeriesId.push(worldIndexData.series_id);
          this.uniqueCountry.push({countryName:worldIndexData.country_name,countryCode:worldIndexData.country_code});
        }
       })
      
      this.countryCheckbox= this.getDistinctCountries(this.uniqueCountry);

      const seriesId = this.getDistinctSeriesId(this.uniqueSeriesId);
      this.options=seriesId.map((id)=>{
        return {sid:id}
      })
    })
  }

  checkboxChanged(item: any) {
    item.checked = !item.checked;

    if (item.checked) {
      this.countryCheckboxValue.push(item);
    } else {
      const index = this.countryCheckboxValue.findIndex((country:any) => country.countryName === item.countryName);

      if (index !== -1) {
        this.countryCheckboxValue.splice(index, 1);
      }
    }
  }

  getDistinctSeriesId(arr: Array<string>): any[] {
    return arr.filter((value, index, self) => 
      self.indexOf(value) === index)
  }

  getDistinctCountries(countries:any){
    const distinctCountries= countries.reduce((acc:any[], country: any) => {
      const foundCountry = acc.find(c => c.countryName === country.countryName);
      if (!foundCountry) {
        acc.push(country);
      }

      return acc;
    }, []);

    return distinctCountries.sort((a:any, b:any) => a.countryName.localeCompare(b.countryName));
  }

  onOptionSelected(event: any) {
    this.selectedSeriesValue = event.value;
  }

  applyFilter() {
    this.isFilteredWorldIndex = true;

    if (this.countryCheckboxValue.length !== 0 && this.selectedSeriesValue) {
      const code = this.countryCheckboxValue.map((codes:any)=>{
        return codes.countryCode
      })

      this.ifinworthService.filterGetWorldIndex(this.selectedSeriesValue,code).subscribe((respnse)=>{
        this.isFilteredWorldIndex = false;
        if(respnse.data){
          const convertedData : worldIndexData[]= respnse.data.map((item:any)=>({
            series_id: item[0],
            country_code:item[1],
            country_name:item[2],
            year:item[3],
            value:item[4]
          }))
          
          this.dataSource = new MatTableDataSource<worldIndexData>(convertedData);

          this.checkboxRefs.forEach(checkbox => {
            checkbox.checked = false;
          });

          this.matSelect.value = null;
        }
      }) 
    }
  }

  clearCheckBox(){
    this.checkboxRefs.forEach(checkbox => {
      checkbox.checked = false;
    });

    this.matSelect.value = null;
  }

 isValid(){
  if(this.countryCheckboxValue.length !== 0 && this.selectedSeriesValue)
    return false;
  return true;
 }
}
