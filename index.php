<?php

use Lib\WeaponGenerator\Service\WeaponGeneratorService;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;
use Slim\Views\PhpRenderer;

use Lib\WeaponGenerator\Infrastructure\ReadEffectsService;
use Lib\WeaponGenerator\Infrastructure\ReadWordsService;

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

/** Api Calls */
$app->get('/api/generate_weapon', function (Request $request, Response $response, $args)
{
    $service = new WeaponGeneratorService(new ReadWordsService(), new ReadEffectsService());
    $result = $service->generateWeapon();
    $response->getBody()->write(json_encode($result));
    return $response;
});

$app->run();