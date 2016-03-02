# docker-loadbalancer

Ensure that both `docker` and `docker-compose` are installed.

## Boot The App

From the root of the repository:

```shell
docker-compose pull && docker-compose build
docker-compose up -d
```

## Scaling

```shell
docker-compose scale app=4
docker-compose scale app=1
```

## Obtaining IP for --advertise

```shell
docker-machine ssh <machine-name> ifconfig eth0 | grep 'inet addr'
```

## References
- https://github.com/hashicorp/consul-template/releases
- https://tech.bellycard.com/blog/load-balancing-docker-containers-with-nginx-and-consul-template/
- http://technologyconversations.com/2015/07/02/scaling-to-infinity-with-docker-swarm-docker-compose-and-consul-part-34-blue-green-deployment-automation-and-self-healing-procedure/ (Blue-Green Deployment)
- http://jasonwilder.com/blog/2014/03/25/automated-nginx-reverse-proxy-for-docker/
- http://southworks.com/blog/2015/07/17/docker-compose-scaling-multi-container-applications/
- http://gliderlabs.com/registrator/latest/user/services/#detecting-services
