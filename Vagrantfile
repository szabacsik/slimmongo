Vagrant.configure("2") do |config|
    config.vm.box = "szabacsik/ubuntu"
    config.vm.provider "virtualbox"
    config.vm.network "private_network", ip: "192.168.100.100"
    config.vm.network "forwarded_port", guest: 80, host: 80
    config.vm.network "forwarded_port", guest: 8080, host: 8080
    config.vm.network "forwarded_port", guest: 8081, host: 8081
    config.vm.network "forwarded_port", guest: 9001, host: 9001
    config.vm.network "forwarded_port", guest: 27017, host: 27017
    config.vm.hostname = "slimmongo"
    config.vm.define "slimmongo"
    config.vm.provider :virtualbox do |vb|
        vb.name = "slimmongo"
        vb.memory = 4096
        vb.cpus = 4
        vb.customize [ "modifyvm", :id, "--ioapic", "on" ]
    end
    config.vm.synced_folder ".", "/home/worker/volumes", disabled: false, type: "rsync"
    config.ssh.username="worker"
    config.ssh.password="worker"
end