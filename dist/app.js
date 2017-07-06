'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slacker = function () {
  function Slacker() {
    _classCallCheck(this, Slacker);

    this.url = process.env.SLACK_WEBHOOK;
    this.appName = process.env.SLACK_APP_NAME;
    this.port = process.env.PORT;
    this.appUrl = process.env.APP_URL;
    this.isProduction = process.env.NODE_ENV === 'production';
  }

  _createClass(Slacker, [{
    key: 'notify',
    value: function notify(text) {
      if (!this.isProduction) return;
      _request2.default.post(this.url, {
        form: {
          payload: JSON.stringify({ text: text })
        }
      }, function (err, response) {
        if (err) {
          console.log("err", err, response);
        }
      });
    }
  }, {
    key: 'started',
    value: function started() {
      this.notify('\n      The project *' + this.appName + '* was started!\n      URL: ' + this.appUrl + '\n      PORT: ' + this.port + '\n      ');
    }
  }]);

  return Slacker;
}();

exports.default = Slacker;