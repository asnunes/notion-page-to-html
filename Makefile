# TEST
test_compose = docker-compose -f docker-compose.test.yml

.PRONY: test-build
test-build:
	$(test_compose) build

.PRONY: test
test:
	make test-build && $(test_compose) run notion-page-to-html-test && make test-down

.PRONY: test-down
test-down:
	$(test_compose) down