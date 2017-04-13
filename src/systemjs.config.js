/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-dnd': 'node_modules/ng2-dnd/bundles/index.umd.js',
            'ngresizable': 'node_modules/ngresizable/ngresizable.module.js',
            'angular-resizable-element': 'node_modules/angular-resizable-element/dist/umd/angular-resizable-element.js',
            'ng2-bs3-modal': 'node_modules/ng2-bs3-modal',
            "ngx-dropdown": "node_modules/ngx-dropdown",
            "angular-2-dropdown-multiselect": "node_modules/angular-2-dropdown-multiselect/src/multiselect-dropdown.js"

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            "ngx-dropdown": { "main": "index.js", "defaultExtension": "js" }
        }
    });
})(this);