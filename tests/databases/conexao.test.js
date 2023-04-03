// importando o sequelize
const sequelize = require("sequelize");

// importar configurações
const config = require("../../databases/config").development;

// Criar a conexão
const conexao = new sequelize(config);

// Executar consulta
const sql = `select 
	p.id, p.nome, 
    ifnull(sum(pp.quantidade), 0) as pizzas_pedidas 
from 
	pizzas as p
	left join pedido_pizza as pp on pp.pizza_id = p.id
group by 
	p.id, p.nome
order by 
	sum(pp.quantidade) DESC;`;

const promessa = conexao.query(sql, {type: sequelize.QueryTypes.SELECT})

promessa.then(
    dados => {
        console.log(dados)
		conexao.close();
    }
)