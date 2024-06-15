'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' : 'data-bs-target="#xs-controllers-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' :
                                            'id="xs-controllers-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' : 'data-bs-target="#xs-injectables-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' :
                                        'id="xs-injectables-links-module-AppModule-ac5e9b635c83b0d6339984a918ee1a74661d1dc712ba93ea5f757ef0939cb4c4b4b26a1142c5d8d0f9a3bf6e68c0354e957eeefbd5d15602cc8d9bf74eaf0081"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' :
                                            'id="xs-controllers-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' :
                                        'id="xs-injectables-links-module-AuthModule-0e4552a75981227e629d8d73adfe7e27aec7d647e804994f7dda1fd199159b99e4ab24efb8473d4866e61aa9a40f99dd57ffc12200583f3a6f0c8f9275f5a401"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-6ba3a09043f9454debc7b48b4977042509cf82cffb8b4c41f29a2c1c9b7596f308e45743b68e25b09c1fa6c37b1d4af10e2ef7478bb144535a84fa3fa161167e"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-6ba3a09043f9454debc7b48b4977042509cf82cffb8b4c41f29a2c1c9b7596f308e45743b68e25b09c1fa6c37b1d4af10e2ef7478bb144535a84fa3fa161167e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-6ba3a09043f9454debc7b48b4977042509cf82cffb8b4c41f29a2c1c9b7596f308e45743b68e25b09c1fa6c37b1d4af10e2ef7478bb144535a84fa3fa161167e"' :
                                        'id="xs-injectables-links-module-PrismaModule-6ba3a09043f9454debc7b48b4977042509cf82cffb8b4c41f29a2c1c9b7596f308e45743b68e25b09c1fa6c37b1d4af10e2ef7478bb144535a84fa3fa161167e"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                            'id="xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                        'id="xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                            'id="xs-controllers-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' :
                                        'id="xs-injectables-links-module-TaskModule-ad48af089d0335b327f87913855543d95b6733294d5df4cfaa46c0e566e5144786beb3ff1ada3bae31547b542f67fdaf26d89c2c73ac8785d7df1fb4acc346eb"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTaskDto.html" data-type="entity-link" >UpdateTaskDto</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});