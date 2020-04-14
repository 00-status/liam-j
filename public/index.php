<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->redirect('/index','/');
$app->redirect('/home','/');
$app->get('/', function (Request $request, Response $response, $args) {
    $response->getBody()->write("About Moi!");
    return $response;
});
$app->get('/dice_roller', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Dice Roller!");
    return $response;
});
$app->get('/weapon_generator', function (Request $request, Response $response, $args) {
    $response->getBody()->write("Weapon Generator!");
    return $response;
});

$app->run();