import process from 'node:process';
const { default: test } = await import(process.env['TEST_AVA_IMPORT_FROM'] ?? '');
test('pass', t => {
    t.pass();
});
