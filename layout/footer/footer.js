class CustomFooter extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <link rel="stylesheet" href="layout/footer/footer.css" />
        <footer>
            <div class="footerTop">
                <img src="./public/logo.png" class="footerLogo">
                <div class="link">
                    <a href="https://github.com/Handsol/team3.git"><img src="./public/icon/githubBlack.png"></a>
                    <a href="https://teamsparta.notion.site/03-431c7d5c407145d2b272b436f8f985c4"><img src="./public/icon/notion.png"></a>
                </div>
            </div>
            <div class="footerBottom">
                <ul>
                    <li>멤버: 김지윤 / 이다은 / 이수민 / 이한솔</li>
                    <li>작업기간: 2024. 12. 23 ~ 2024. 12. 27</li>
                </ul>
            </div>
        </footer>
      `;
  }
}
customElements.define("custom-footer", CustomFooter);
