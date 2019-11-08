// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cadastro-aluno$1.0.0/src/app/views/alunos/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_escapeXmlAttr = marko_helpers.xa,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><body>");

  component_globals_tag({}, out);

  out.w("<h1>Cadastro de Alunos</h1><form action=\"/alunos\" method=\"post\">");

  if (data.aluno.id) {
    out.w("<div><input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\" value=\"" +
      marko_escapeXmlAttr(data.aluno.id) +
      "\"></div>");
  }

  out.w("<div><label for=\"nome\">Nome:</label><input type=\"text\" id=\"nome\" name=\"nome\" value=\"" +
    marko_escapeXmlAttr(data.aluno.nome) +
    "\"></div><div><label for=\"data_nasc\">Data_Nascimento:</label><input type=\"text\" id=\"data_nasc\" name=\"data_nasc\" value=\"" +
    marko_escapeXmlAttr(data.aluno.data_nasc) +
    "\" placeholder=\"DD-MM-AAAA\"></div><div><label for=\"cpf\">CPF:</label><input type=\"text\" id=\"cpf\" name=\"cpf\" value=\"" +
    marko_escapeXmlAttr(data.aluno.cpf) +
    "\"></div><div><label for=\"nota\">NOTA:</label><input type=\"text\" id=\"nota\" name=\"nota\" value=\"" +
    marko_escapeXmlAttr(data.aluno.nota) +
    "\"></div><input type=\"submit\" value=\"Salvar\"></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cadastro-aluno$1.0.0/src/app/views/alunos/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
