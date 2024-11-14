export class webTable{

    navigateToUrl(url){
        cy.visit(url);
    };
    validatetableCount(){
        cy.get('table#productTable').scrollIntoView();
        cy.get('table#productTable tr').should('have.length', 6); // row count validate
        cy.get('table#productTable th').should('have.length', 4); // header count validate
        cy.get('table#productTable td').should('have.length', 20); // cell count validate
    }

    validateSelectedCell(){
        cy.get('table#productTable').scrollIntoView();
        cy.get('table#productTable tr:nth-child(3) td:nth-child(2)').contains('Tablet');
    }
    getAllRowsValue(){
        cy.get('table#productTable').scrollIntoView();
        cy.get('table#productTable tbody tr').each(($row, index, $rows)=>{
                cy.wrap($row).within(()=>{
                    cy.get('td').each(($cel, index, $cels)=>[
                        console.log($cel.text())
                    ])
                })

        })
    };
    pagination(){
        let pageNumber;
        cy.get('table#productTable').scrollIntoView();
        cy.get('ul#pagination li a').then(($ele)=>{
            pageNumber = $ele.length;
            cy.log("inside", pageNumber);
            for(let p = 1; p <=pageNumber; p++){
                cy.get('ul#pagination li:nth-child('+p+') a').click();
                cy.wait(3000);
                cy.get('table#productTable tbody tr').each(($row, index, $rows)=>[
                    cy.wrap($row).within(()=>{
                        cy.get('td').each(($cel, index, $cels)=>{
                            console.log($cel.text());

                    })

                    })
                ])

            }

        })
        
    }


}