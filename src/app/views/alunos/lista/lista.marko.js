// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cadastro-aluno$1.0.0/src/app/views/alunos/lista/lista.marko",
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

  out.w("<h1> Listagem de Alunos </h1><table id=\"alunos\"><tr><td>ID</td><td>NOME</td><td>DATA_NASC</td> <td>CPF</td><td>NOTA</td><td>ENDERECO</td></tr>");

  var for__13 = 0;

  marko_forEach(data.alunos, function(aluno) {
    var keyscope__14 = "[" + ((for__13++) + "]");

    out.w("<tr id=\"aluno_" +
      marko_escapeXmlAttr(aluno.id) +
      "\"><td>" +
      marko_escapeXml(aluno.id) +
      "</td><td>" +
      marko_escapeXml(aluno.nome) +
      "</td><td>" +
      marko_escapeXml(aluno.data_nasc) +
      "</td><td>" +
      marko_escapeXml(aluno.cpf) +
      "</td><td>" +
      marko_escapeXml(aluno.nota) +
      "</td><td><a href=\"/alunos/endereco\">Editar</a></td><td><a href=\"/alunos/form/" +
      marko_escapeXmlAttr(aluno.id) +
      "\">Editar</a></td> <td><a href=\"#\" da-ref=\"" +
      marko_escapeXmlAttr(aluno.id) +
      "\" data-type=\"remocao\">Remover</a></td> </tr>");
  });

  out.w("</table> <script src=\"/estatico/js/remove-aluno.js\">\r\n        </script> ");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  out.w("</body> </html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cadastro-aluno$1.0.0/src/app/views/alunos/lista/lista.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
