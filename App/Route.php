<?php

    namespace App;

    use MF\Init\Bootstrap;

    class Route extends Bootstrap {

        protected function initRoutes(){

            $routes['index'] = array(
                'route' => '/',
                'controller' => 'indexController',
                'action' => 'index'
            );

            $routes['montar'] = array(
                'route' => '/montar',
                'controller' => 'indexController',
                'action' => 'montar'
            );

            $routes['lista'] = array(
                'route' => '/lista',
                'controller' => 'indexController',
                'action' => 'lista'
            );

            $this->setRoutes($routes);
        }      
        
        
    }

?>