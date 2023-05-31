<?php

namespace App\Controllers;

use MF\Controller\Action;
use MF\Model\Container;



class IndexController extends Action {


    public function index(){

        $this->render('index');
    }

    public function montar(){

        $this->render('montar');
    }

    public function lista(){

        $container = Container::getModel('Lista');
        $this->lista = $container->load();
        $this->poke = $container->recuperar();

        $this->render('lista');
    }
    
}

?>