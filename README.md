Testing MongoDB with SlimFramework

<https://www.php.net/manual/en/mongodb.installation.manual.php>
<https://docs.mongodb.com/ecosystem/drivers/php/>

```
vagrant up
vagrant ssh
cd /home/worker/volumes
docker-compose up -d
docker exec -it -u1000 frontend /bin/bash -c "cd /tmp && git clone https://github.com/mongodb/mongo-php-driver.git && cd mongo-php-driver && git submodule update --init && phpize && ./configure && make all && sudo make install"
docker exec -it -u0 frontend /bin/bash -c "echo 'extension=mongodb.so' | sudo tee /etc/php/7.4/mods-available/mongodb.ini && ln -s /etc/php/7.4/mods-available/mongodb.ini /etc/php/7.4/fpm/conf.d/60-mongodb.ini && ln -s /etc/php/7.4/mods-available/mongodb.ini /etc/php/7.4/cli/conf.d/60-mongodb.ini"
docker exec -it -u0 frontend /bin/bash -c "supervisorctl -u worker -p worker restart php-fpm"
docker exec -it -u1000 frontend /bin/bash -c "cd ~/volume/artifact/current && composer install"
```

Use **MongoDB Compass** to create **MyDB** and import **postCollection**
```
mongodb://root:PASSWORD@127.0.0.1:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false
```
