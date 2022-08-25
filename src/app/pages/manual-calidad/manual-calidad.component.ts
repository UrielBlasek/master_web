import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Manual de Calidad 1',
    children: [{name: 'Política de la Calidad'}, {name: 'Objetivos de la calidad'},
               {name: 'Analisis FODA'}, {name: 'Análisis de Partes Interesadas'}, {name: 'Análisis Integral de riesgo por procesos'},
               {name: 'Calendario de Capacitación'}, {name: 'Mapeo General Procesos'}]
  },
  {
    name: 'Manual de Calidad 2',
    children: [{name: 'Política de la Calidad'}, {name: 'Objetivos de la calidad'},
    {name: 'Analisis FODA'}, {name: 'Análisis de Partes Interesadas'}, {name: 'Análisis Integral de riesgo por procesos'},
    {name: 'Calendario de Capacitación'}, {name: 'Mapeo General Procesos'}]
  },
];

interface ExampleFlatNode {
  expandable : boolean;
  name: string;
  level : number;
}

@Component({
  selector: 'app-manual-calidad',
  templateUrl: './manual-calidad.component.html',
  styleUrls: ['./manual-calidad.component.css']
})
export class ManualCalidadComponent {

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };


    treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level,
      node => node.expandable,
    );

    treeFlattener = new MatTreeFlattener(
      this._transformer,
      node => node.level,
      node => node.expandable,
      node => node.children,
    );


    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  constructor() { 
   this.dataSource.data = TREE_DATA;
   }
   
   hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit(): void {
  }

  

}
