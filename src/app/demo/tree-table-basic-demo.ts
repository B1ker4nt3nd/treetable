import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { NodeService } from '../../service/nodeservice';


export interface ColumnInfo {
    /** Mezőnév, ami alapján ki kell olvasani a megjelenítendő értékeket */
    field: string;
  
    /** Az oszlop neve */
    header: string;
  }

@Component({
    selector: 'tree-table-basic-demo',
    templateUrl: './tree-table-basic-demo.html'
})
export class TreeTableBasicDemo implements OnInit {
      /** Milyen property néven talállható az adat */
  @Input() dataStructurePropertyName = 'tableData';

  /** Milyen property néven talállható az oszlop leíró  */
  @Input() columnPropertyName = 'cols';

  /** A megjelenítendő adat */
  treeTableInput: TreeNode[] = [];

  /** A megjelenítendő oszlopok */
  treeTablecolumns: ColumnInfo[] = [];

    constructor(private nodeService: NodeService) {}

    ngOnInit() {
        this.nodeService.getFilesystem().then((value) => {
            if ((value as any) && (value as any)[this.columnPropertyName]) {
                this.treeTablecolumns = (value as any)[this.columnPropertyName];
              } else {
                this.treeTablecolumns = [];
              }
          
              if ((value as any) && (value as any)[this.dataStructurePropertyName]) {
                this.treeTableInput = (value as any)[this.dataStructurePropertyName];
              } else {
                this.treeTableInput = [];
              }
        });
    }
}