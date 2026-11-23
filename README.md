# Montagrade

Monte e confira a grade curricular de um curso da UFRPE no navegador: arraste disciplinas entre os períodos, ajuste as cargas horárias e veja na hora quais exigências do MEC e da UFRPE a proposta cumpre. A grade da Licenciatura em Computação vem carregada; departamentos, grupos de carga horária e regras podem ser editados para qualquer curso.

Use em [ufrpe.pages.dev/montagrade](https://ufrpe.pages.dev/montagrade/). Nada é enviado a um servidor: a grade fica salva só neste navegador, e trocar de computador ou limpar os dados do navegador a apaga. **Exporte o JSON** para guardar o trabalho ou enviá-lo ao colegiado; PNG e impressão em PDF servem para mostrar a grade.

## Contribuir

- **Achou um erro, uma regra desatualizada ou montou a grade de outro curso?** Abra uma *issue* (aba Issues, botão verde New issue; pede uma conta gratuita no GitHub) contando o que viu e em qual curso. Para doar a grade de outro curso, anexe o JSON exportado. Não precisa saber programar.
- **Quer mudar o código?** Faça um fork, altere e abra um pull request. Para rodar localmente, sirva a pasta por HTTP (`python3 -m http.server`) e abra `localhost:8000`; os testes rodam com `make verify-full` (Node).

As regras fixas citam a norma de onde vêm (Res. CNE/CP 4/2024, Res. CEPE/UFRPE 744/2024 e 924/2025). Se uma regra estiver errada, cite o artigo na issue.

## Licença

[MIT](LICENSE). Iniciativa pessoal de Lucas Silva Figueiredo, professor do Departamento de Computação da UFRPE; não é um sistema oficial da UFRPE.
