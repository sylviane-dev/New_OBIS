import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import{Tableau4Service} from '../../../../shared/services/immatriculation/employeur/tableau4.service';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { Tableau1Service } from 'src/app/shared/services/immatriculation/employeur/tableau1.service';
import { DimensionsService } from 'src/app/shared/services/immatriculation/dimensions.service';
import { ImmaPathService } from 'src/app/shared/services/immatriculation/imma-path.service';
//import { table } from 'console';
declare var $:any;


@Component({
  selector: 'app-tableau4-employeur',
  templateUrl: './tableau4-employeur.component.html',
  styleUrls: ['./tableau4-employeur.component.css']
})
export class Tableau4EmployeurComponent implements OnInit,AfterViewInit {
  chartsController:string = "ngx-charts-line-chart";
  graphController:string = "ngx-charts-bar-vertical"; // ngx-charts-pie-chart
  erreurChargement:boolean= false;
  PeriodeListe =this.tableau1Service.PeriodeListe
  formPeriode:number = 2020
  tableHeader:number=this.formPeriode
  tableHeaderData:any = [];

  barChartsDataList:Array<any> = [];
  chartsData:any = [];
  chartsOptions:any = this.tableau4Service.chartsOptions;
  donnees:Array<any> = [];

  constructor(
    private tableau4Service:Tableau4Service,
    private tableau1Service: Tableau1Service,
    private location : Location,
    private immaPathService : ImmaPathService,
    private dimensionService :DimensionsService,

  ) { }

  ngOnInit(): void {
   
    this.immaPathService.ontActiveLiens();
    this.onUpdateTableHeader(this.formPeriode);
    this.onGetDataRealValue2(this.formPeriode);
    //this.onGetSecteurActiviteList();
    // this.onBuildBarChartsData();
    // this.onBuidAreaAndLineChartsData();
    // this.onBuildChartsDataByCategory();
    registerLocaleData(es);
   
  }
  ngAfterViewInit(){
    // fonction pour changement chart
    //this.activeLiens("#tEmployeur6")
  }

  private activeLiens(id:string){
   if(this.location.isCurrentPathEqualTo(this.location.path())){
      $(".active-menu").removeClass("active-menu");
      $(id).addClass("active-menu");
      alert("ici")
    }
  }
  /**
   * [ MODIFIER *************************************]
   * Construction et initialisation des données à afficher dans le tableau
   * npm install --save angular-archwizard
   * npm install ngx-pagination --save
   */
  public onGetSecteurActiviteList(exercice:number){
    this.donnees = [];
    let data:Array<any> = this.tableau4Service.secteurArrayList;
    data.forEach((secteurItem:any) => {
      let obj:any = {
        "secteur": secteurItem,
        "chartsData":{"libelle": "", data: []},
        "contenu": [
          {"id": 1, "libelle": exercice-4, "valeur": 0},
          {"id": 2, "libelle": exercice-3, "valeur": 0},
          {"id": 3, "libelle": exercice-2, "valeur": 0},
          {"id": 4, "libelle": exercice-1, "valeur": 0},
          {"id": 5, "libelle": exercice , "valeur": 0}
        ]
      };
      this.donnees.push(obj);
    });
    return this.donnees
   // this.onGetDataRealValue(this.donnees);
  }
  /***********
   * mes a jour l'entête du tableau 
   */
  private onUpdateTableHeader(exercice:number){
    this.tableHeaderData=[
      {"id": 1, "libelle": exercice-4, "valeur": 0, "chartsData":{"libelle": "", data: []}},
      {"id": 2, "libelle": exercice-3, "valeur": 0, "chartsData":{"libelle": "", data: []}},
      {"id": 3, "libelle": exercice-2, "valeur": 0, "chartsData":{"libelle": "", data: []}},
      {"id": 4, "libelle": exercice-1, "valeur": 0, "chartsData":{"libelle": "", data: []}},
      {"id": 5, "libelle": exercice, "valeur": 0, "chartsData":{"libelle": "", data: []}}
    ];
  }


  /** 
   * [ MODIFIER ***************************************]
   * Remplir les donnée données avec les valeurs réelles
   * 
   * catLibelle: "Assurés volontaires"
   * noAnnee: 2020
   * nombreEmployeur: 85
   * 
   */
  public onGetDataRealValue2(exercice:number){
    this.donnees = [];
  this.tableau4Service.queryTableau4(exercice).subscribe(
    data=>{
     // console.log(data)
      let obj = this.onGetSecteurActiviteList(exercice);
      data.forEach((element:any) => {
        element.forEach((exercieData:any) => {
          let index = obj.findIndex((elt:any)=>elt.secteur.libelleSecteur.toUpperCase().trim()==exercieData.catLibelle.toUpperCase().trim());
          if(index < 0){
            alert("erreur")
          }else{
            let sousIndex = obj[index].contenu.findIndex((item:any)=>item.libelle==(+exercieData.noAnnee));
            if(sousIndex<0){
              alert("erreur")
            }else{
              obj[index].contenu[sousIndex].valeur=(+exercieData.nombreEmployeur)
            }
          }
        });
      });
        this.onBuildBarChartsData();
        this.onBuidAreaAndLineChartsData();
        this.onBuildChartsDataByCategory();
    },
    erreur=>{
      this.erreurChargement =true;
      console.log(erreur)
    }
  )
    // data.forEach(element => {
    //   element.contenu.forEach((item:any) => {
    //     let valeurReelle:number = 1 + Math.floor(10900 * Math.random());
    //     item.valeur = valeurReelle;
    //   });
    // });
    // this.onBuildChartsDataByCategory();
  }

  onChangePeriode(){
    this.onUpdateTableHeader(this.formPeriode)
    this.onGetDataRealValue2(this.formPeriode)
  }
  /**
   * Cette méthode permet de calculer les totaux du tableau de la barre grise horizontale
   */
  public onCalculTotal(position:number):number{
    let total:number = 0;
    this.donnees.forEach((item:any) => {
      if(item.secteur.id < 4){
        total += (+item.contenu[position].valeur);
      }
    });
    return total;
  }


  /**
   * Cette méthode permet de sélectionner un autre type de graphique
   */
  public onSelectionneTypeGraphe(grapheName:string, domId:any){
    this.chartsController = grapheName;
    $(".btn-chart-active").removeClass("btn-chart-active");
    $("#" + domId).addClass("btn-chart-active");
  }

  public onSelectGraphe(grapheName:string){
    this.graphController = grapheName;
  }

  /**
   * Cette méthode construit les données pour la génération ds graphes de lignes et de secteur
   * à partir de la source de données permettant de remplir le tableau.
   */
  private onBuildBarChartsData(){
    this.barChartsDataList = [];
    this.tableHeaderData.forEach((headerItem:any) => {
      let obj:any = {"name": headerItem.libelle.toString(), "series":[]};
      this.donnees.forEach((dataItem:any) => {
        let position:number = dataItem.contenu.findIndex((c:any)=> (+c.id) === (+headerItem.id));
        if(position >= 0){
          let objet:any = {"name": dataItem.secteur.libelleSecteur, "value": dataItem.contenu[position].valeur};
          obj.series.push(objet);
        }
      });
      this.barChartsDataList.push(obj);
    });
  }


  /**
   * Cette méthode construit les données pour la génération ds graphes de lignes et de secteur
   * à partir de la source de données permettant de remplir le tableau.
   */
  private onBuidAreaAndLineChartsData(){
    this.chartsData = [];
    this.donnees.forEach((dataItem:any) => {
      let obj:any = {"name": dataItem.secteur.libelleSecteur, "series":[]};
      dataItem.contenu.forEach((item:any) => {
        let objet:any = {"name": item.libelle.toString(), "value": item.valeur};
        obj.series.push(objet);
      });
      this.chartsData.push(obj);
    });
  }


  /**
   * Cette méthode construit les données pour la génération des graphes par catégorie d'activités
   * à partir de la source de données permettant de remplir le tableau.
   */
  private onBuildChartsDataByCategory(){
    this.tableHeaderData.forEach((element:any) => {
      element.chartsData.libelle = element.libelle;
      element.chartsData.data = this.getChartsData(element);
    });
  }

  private getChartsData(headerItem:any): Array<any>{
    let returnedArray:Array<any> = [];
    this.donnees.forEach((item:any) => {
      let position:number = item.contenu.findIndex((c:any)=> (+c.id) === (+headerItem.id));
      if(position >= 0){
        let obj:any = {"name": item.secteur.libelleSecteur, "value": item.contenu[position].valeur};
        returnedArray.push(obj);
      }
    });
    return returnedArray;
  }



  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



}

enum TableHeader{
  Annee1 = "2015",
  Annee2 = "2016",
  Annee3 = "2017",
  Annee4 = "2018",
  Annee5 = "2019"
}

