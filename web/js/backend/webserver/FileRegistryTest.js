"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fs = require('fs');
const assert = require('assert');
const http = require('http');
const { Webserver } = require('./Webserver');
const { Hashcodes } = require('../../Hashcodes');
const { FileRegistry } = require('./FileRegistry');
const { WebserverConfig } = require('./WebserverConfig');
const { assertJSON } = require("../../test/Assertions");
const webserverConfig = new WebserverConfig(".", 8080);
describe('FileRegistry', function () {
    describe('create', function () {
        it("basic", function () {
            let fileRegistry = new FileRegistry(webserverConfig);
            assert.equal(fileRegistry.hasKey("0x0001"), false);
            let registerData = fileRegistry.register("0x0001", "./package.json");
            let expected = {
                "key": "0x0001",
                "filename": "/home/burton/projects/polar-bookshelf/package.json",
                "url": "http://127.0.0.1:8080/files/0x0001"
            };
            assertJSON(registerData, expected);
            assert.equal(fileRegistry.hasKey("0x0001"), true);
        });
        it("registerFile", function () {
            return __awaiter(this, void 0, void 0, function* () {
            });
        });
    });
});
//# sourceMappingURL=FileRegistryTest.js.map