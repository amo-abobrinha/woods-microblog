FRONTEND_DIR=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))
TARGET_DIR=$(shell readlink -f $(FRONTEND_DIR)/../target/frontend)

# WARNING: in order for this script to work as intended always run it from "[repo]/frontend" directory

.PHONY: all
all: install
	@echo "Finished!"
	@exit

.PHONY: install
install: $(TARGET_DIR)/app.js static_files

$(TARGET_DIR)/app.js:
	@webpack $(FRONTEND_DIR)/js/main.js $(TARGET_DIR)/app.js -p

.PHONY: static_files
static_files:
	@ln -Tsf $(FRONTEND_DIR)/js $(TARGET_DIR)/js
	@ln -Tsf $(RSYNC_ARGS) $(FRONTEND_DIR)/index.html $(TARGET_DIR)/index.html
	@ln -Tsf $(FRONTEND_DIR)/node_modules $(TARGET_DIR)/node_modules

.PHONY: watch
watch:
	@webpack js/main.js $(TARGET_DIR)/app.js --watch
