import process from 'node:process';
// This fixture is copied to a temporary directory, so import AVA through its
// configured path.
const { default: test } = await import(process.env['TEST_AVA_IMPORT_FROM'] ?? '');
test('pass', t => {
    t.pass();
});
