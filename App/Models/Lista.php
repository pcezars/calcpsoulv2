<?php

namespace App\Models;

use MF\Model\Model;

class Lista extends Model{

	public function load() { //read
		$query = '
        select 
            * 
        from 
            tb_lista
		ORDER BY
			id

		';
		$stmt = $this->db->prepare($query);
		$stmt->execute();
		return $stmt->fetchAll(\PDO::FETCH_ASSOC);
	}

    public function recuperar() { //read
		$query = '
        select 
            * 
        from 
            tb_lista
        WHERE
            id = ? 

		';
		$stmt = $this->db->prepare($query);
        error_reporting(E_ERROR | E_PARSE);
        $stmt->bindValue(1, $_GET['pokemon']);
		$stmt->execute();
		return $stmt->fetchAll(\PDO::FETCH_ASSOC);
	}
}


//$poke = $busca->recuperar();
//$lista = $busca->load();