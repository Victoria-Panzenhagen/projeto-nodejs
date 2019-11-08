// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cadastro-aluno$1.0.0/src/app/views/alunos/lista/lista-end.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"></head><body>");

  component_globals_tag({}, out);

  out.w("<h1> Lista de Endereços </h1><table id=\"enderecos\"><tr><td>ID</td><td>RUA</td><td>NUM</td> <td>COMPL</td><td>BAIRRO</td><td>ALUNO_ID</td></tr>");

  var for__13 = 0;

  marko_forEach(data.enderecos, function(endereco) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<tr id=\"endereco_" +
      marko_escapeXmlAttr(endereco.id) +
      "\"><td>" +
      marko_escapeXml(endereco.id) +
      "</td><td>" +
      marko_escapeXml(endereco.rua) +
      "</td><td>" +
      marko_escapeXml(endereco.num) +
      "</td><td>" +
      marko_escapeXml(endereco.compl) +
      "</td><td>" +
      marko_escapeXml(endereco.bairro) +
      "</td><td>" +
      marko_escapeXml(endereco.aluno_ID) +
      "</td><td><a href=\"alunos/endereco\">Editar</a></td> </tr>");
  });

  out.w("</table> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cadastro-aluno$1.0.0/src/app/views/alunos/lista/lista-end.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
