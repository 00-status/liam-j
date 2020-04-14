<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\PhpRenderer;

require __DIR__ . '/vendor/autoload.php';

const TEMPLATES_PATH = './public/templates';

$app = AppFactory::create();

$app->redirect('/index','/');
$app->redirect('/home','/');
$app->get('/', function (Request $request, Response $response, $args) {
    $renderer = new PhpRenderer(TEMPLATES_PATH);
    return $renderer->render($response, "landing.html", $args);
});
$app->get('/dice_roller', function (Request $request, Response $response, $args) {
    $renderer = new PhpRenderer(TEMPLATES_PATH);
    return $renderer->render($response, "landing.html", $args);
});
$app->get('/weapon_generator', function (Request $request, Response $response, $args) {
    $renderer = new PhpRenderer(TEMPLATES_PATH);
    return $renderer->render($response, "landing.html", $args);
});

$app->run();