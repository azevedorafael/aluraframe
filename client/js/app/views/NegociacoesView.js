class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
            ${model.negociacoes.map(n => `

                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>

                `).join('')}
        </tbody>

        <tfoot>
            <td colspan = "3"></td>
            <td>${
                    // (function() { //IIFE = Imeditealy Invocted Function Expression
                    //     let total = 0;
                    //     model.negociacoes.forEach(n => total += n.volume);
                    //     model.negociacoes.forEach((n) => {
                    //        total += n.volume;
                    //     })
                    //     return total;
                    // })()

                //mesma solução acima , porém em paradigma funcional
                    model.negociacoes.reduce((total, n) => total + n.volume, 0.0)
                }</td>
        </tfoot>
    </table>
    `;
    }

}
