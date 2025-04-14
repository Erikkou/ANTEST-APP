## Overzicht van de CI/CD Bouwstraat

In dit project heb ik een complete CI/CD-pipeline opgezet voor een fullstack React + Node.js applicatie. De hele ontwikkelstraat is geautomatiseerd met de volgende tools:

- **Gitea**: Gebruikt als self-hosted Git-platform. Code push naar de `main` branch triggert automatisch de pipeline.
- **Gitea Actions**: CI-automatisering voor build, test en deployment:
  - **Build**: Installeert dependencies, bouwt de frontend en backend containers.
  - **Test**: Voert unittests via Jest.
  - **Deploy**: Automatische uitrol naar Kubernetes via ArgoCD.
- **ArgoCD**: GitOps tool voor het synchroniseren van Kubernetes manifests. Bij elke merge naar `main` worden de nieuwste containers images uitgerold.
- **Monitoring**: Real-time monitoring met **Prometheus** en **Grafana**. Metrics worden automatisch verzameld voor inzicht in performance en uptime.
- **ChatOps**: Alerts worden via **Slack** verzonden, bijvoorbeeld bij te hoge CPU en/of RAM gebruik.

