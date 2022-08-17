'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var NextLink = _interopDefault(require('next/link'));
var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var isString = function isString(x) {
  return Object.prototype.toString.call(x) === "[object String]";
};

var _templateObject;

var _excluded = ["children", "className", "href", "as", "locale"];
var Link = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      as = _ref.as,
      locale = _ref.locale,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  if (isString(href)) {
    href = href;
    var internal = /^\/(?!\/)/.test(href);

    if (!internal) {
      return React.createElement(Anchor, Object.assign({
        href: href,
        className: className,
        target: "_blank",
        rel: "noopener noreferrer",
        ref: ref
      }, rest), children);
    }
  }

  if (href) {
    return React.createElement(NextLink, {
      href: href,
      as: as,
      locale: locale
    }, React.createElement(Anchor, Object.assign({
      href: href,
      className: className,
      ref: ref
    }, rest), children));
  }

  return React.createElement(Anchor, Object.assign({
    className: className,
    ref: ref
  }, rest), children);
});
Link.displayName = "Link";
var Anchor = /*#__PURE__*/styled.a(_templateObject || (_templateObject = /*#__PURE__*/_taggedTemplateLiteralLoose(["\n  ", "\n"])), function (_ref2) {
  var href = _ref2.href,
      onClick = _ref2.onClick;
  return !href && !onClick && "cursor: default;";
});

exports.default = Link;
exports.isString = isString;
//# sourceMappingURL=next-link.cjs.development.js.map
