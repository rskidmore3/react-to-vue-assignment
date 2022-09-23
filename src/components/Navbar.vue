<template>

<nav class="navbar navbar-expand-lg bg-light mb-1">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <!-- <a class="nav-link active" aria-current="page" href="#/">Games List</a> -->
                <router-link to="/" class="nav-link">Games List</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/addgame" class="nav-link">Add Game</router-link>
                    <!-- <a class="nav-link" href="#/addgame">Add Game</a> -->
                </li>    
                <li class="nav-item">
                    <router-link to="/staticlist" class="nav-link">Static List</router-link>
                    <!-- <a class="nav-link" href="#/addgame">Add Game</a> -->
                </li>    
                <li class="nav-item">
                    <router-link to="/staticform" class="nav-link">Static Form</router-link>
                    <!-- <a class="nav-link" href="#/addgame">Add Game</a> -->
                </li>    
            </ul>
        </div>
        <form class="form-inline d-none d-sm-none d-lg-inline">
          <i class="fas fa-search" aria-hidden="true"></i>
          <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
            aria-label="Search">
        </form>
    </div>
    </nav>

    <div class="d-flex justify-content-center">
        <!-- <component :is="currentView" /> -->
        <router-view></router-view>
    </div>

</template>
