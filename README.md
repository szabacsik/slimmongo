Testing MongoDB with SlimFramework

```
docker exec -it -u1000 frontend /bin/bash -c "cd ~/volume/artifact/current && composer install"
```

<https://www.php.net/manual/en/mongodb.installation.manual.php>
<https://docs.mongodb.com/ecosystem/drivers/php/>

```
php -m
cd /tmp
git clone https://github.com/mongodb/mongo-php-driver.git
cd mongo-php-driver
git submodule update --init
phpize
./configure
make all
sudo make install
php -i | grep extension_dir
echo "extension=mongodb.so" | sudo tee /etc/php/7.3/mods-available/mongodb.ini
sudo ln -s /etc/php/7.3/mods-available/mongodb.ini /etc/php/7.3/fpm/conf.d/60-mongodb.ini
sudo ln -s /etc/php/7.3/mods-available/mongodb.ini /etc/php/7.3/cli/conf.d/60-mongodb.ini
php -m
supervisorctl -u worker -p worker restart php-fpm
composer require mongodb/mongodb
```